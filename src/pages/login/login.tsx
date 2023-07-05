import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as rootStore from 'stores/root_store';
import { userPresenter, userStore } from 'stores/root_store';

import styles from './login.module.css';
import logoICRM from 'assets/icrm_logo.svg';
import icrmLogo from 'assets/bg_logo.svg';
import vnIcon from 'assets/vn_icon.svg'
import ukIcon from 'assets/uk_icon.svg'

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TbLoaderQuarter } from 'react-icons/tb';
import { CommonModel } from 'services/common_services';
import { AES, enc } from 'crypto-js';
import CryptoJS from 'crypto-js';
import { Backdrop, CircularProgress } from '@mui/material';
import { CRYPTED_KEY } from 'utils/constants';

interface FormLoginModel {
  userName: string;
  password: string;
  saleOrg: string;
}

// validation foem bằng thư viện yup
const schema = yup.object().shape({
  userName: yup.string().required('Tên tài khoản không được để trống!'),
  password: yup.string().required('Mật khẩu không được để trống!'),
});

export function createLogin() {
  return observer(() => {
    // key lấy password, user name từ mvc
    const key = CryptoJS.enc.Utf8.parse(CRYPTED_KEY);

    // Key ghi nhớ mật khẩu
    const ENCRYPT_KEY = '3fiYLDFb8yNHPqEyUGMe62fJpnyaNXuM';
    const navigate = useNavigate();

    // Tên trang
    document.title = 'Đăng nhập hệ thống';
    // ============= Lấy parameter đăng nhập ==================//
    // trang chủ gửi user , password qua
    const [searchParams] = useSearchParams();
    const [selectSaleOrg, setSelectSaleOrg] = useState<string>('');

    // Nhớ thông tin đăng nhập
    const [isRemember, setIsRemember] = useState(false);

    // danh sach organization
    const [listOrg, setListOrg] = useState<CommonModel[]>([]);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // ========== Yup validate ===============
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm<FormLoginModel>({
      resolver: yupResolver(schema),
    });

    // =================== Show hide password =======================
    // hàm show và hide password. nếu đang show thì hide và ngược lại
    const handleShowPassword = () => {
      setShowPassword((pre) => !pre);
    };

    // ================== Submit login form =================
    const onLogin = async (value: FormLoginModel) => {
      setLoading(true);
      await userPresenter.login(userStore, {
        userName: value.userName,
        password: value.password,
        plantCode: selectSaleOrg,
      });
      if (userStore.userRespone.isSuccess) {
        // Kiểm tra xem user có tick "Nhớ thông tin đăng nhập" không?
        if (isRemember) {
          // Nếu có thì lưu username và password vào localStorage và tự động móc ra lần sau
          localStorage.setItem('username', encrypt(value.userName));
          localStorage.setItem('password', encrypt(value.password));
          localStorage.setItem('saleOrg', encrypt(selectSaleOrg));
        } else {
          // Không thì cũng phải clear hết localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('saleOrg');
        }
        navigate('/');
      } else {
        toast.error(userStore.userRespone.message);
      }
      setLoading(false);
      navigate('/');
    };

    // chọn company từ thẻ select
    const handleSelectOrg = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectSaleOrg(e.target.value);
    };

    useEffect(() => {
      const getListOrg = async () => {
        // const result = await rootStore.commonPresenter.getListDropDownSaleOrg(rootStore.commonStore);
        setListOrg(rootStore.commonStore.commonRespone.data);
      };
      // ghi nhớ mật khẩu
      const getRememberInfo = () => {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const saleOrg = localStorage.getItem('saleOrg');

        // có thông tin thì set vào form và show lên
        if (username && password && saleOrg) {
          setValue('userName', decrypt(username));
          setValue('password', decrypt(password));
          setValue('saleOrg', decrypt(saleOrg));
          setSelectSaleOrg(decrypt(saleOrg));
          setIsRemember(true);
        } else {
          // Không thì cũng phải clear hết localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('saleOrg');
        }
      };

      // đăng nhập từ mvc
      const LoginHasStringParams = async () => {
        setLoading(true);
        if (searchParams.get('username')) {
          await userPresenter.login(userStore, {
            userName: decrypted(searchParams.get('username')),
            password: decrypted(searchParams.get('password')),
            plantCode: searchParams.get('plantCode'),
          });
          if (userStore.userRespone.isSuccess) {
            navigate('/');
          } else {
            toast.error(userStore.userRespone.message);
          }
        }
        setLoading(false);
      };

      LoginHasStringParams().then(() => {
        getListOrg().then(() => {
          // chạy xong getListOrg() thì mới được call info login
          getRememberInfo();
        });
      });
    }, []);
    // ====MÃ HÓA===============================================================================
    const encrypt = (text: string): string => {
      return AES.encrypt(text, ENCRYPT_KEY).toString();
    };

    const decrypt = (text: string): string => {
      return AES.decrypt(text, ENCRYPT_KEY).toString(enc.Utf8);
    };

    const decrypted = (data: any) => {
      const decryptedData = CryptoJS.AES.decrypt(data, key, {
        keySize: 256 / 8,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return CryptoJS.enc.Utf8.stringify(decryptedData);
    };

    return (
      <div className={styles.wrapper}>
        {process.env.NODE_ENV === 'production' ? (
          <Backdrop sx={{ color: '#blue', background: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div className={`bg-[#1F2D47] flex ${styles.containerWidth}`}>
            <div className={`relative w-1/2 hidden xl:flex md:flex sm:hiden flex-col justify-center items-center p-5`}>
              <div className='flex justify-center'>
                <img src={icrmLogo} className="w-[80%]" />
              </div>
              {/* <span
                className={`absolute w-10 h-10 bg-white rounded-full top-9 right-9 shadow-zinc-800 border-l-2 ${styles.shadowInner} border-white`}
              ></span> */}
            </div>
            <div className="xl:w-1/2 md:w-1/2 w-full p-[5%] sm:p-[10%]">
              <div className="w-full flex justify-between mb-6 items-end"></div>
              <div>
                <img src={vnIcon} className="h-[25px] absolute top-[110px] sm:top-[38px] right-[85px]" />
                <img src={ukIcon} className="h-[25px] absolute top-[110px] sm:top-[38px] right-[30px]" />
              </div>
              <div className='flex justify-center mb-2.5 sm:hidden' >
                <img src={logoICRM} className="h-[40px]" />
              </div>
              <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
                <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
                  Login system
                </h3>
                <div className="relative text-gray-500">
                  <input
                    {...register('userName')}
                    type="text"
                    id="userName"
                    placeholder="Enter your email"
                    className="peer w-full border-2 border-gray-200 py-2 pr-3 pl-4 bg-transparent outline-none placeholder-slate-400 focus:border-blue-300 h-[40px] rounded-sm"
                    autoComplete="off"
                  />
                </div>
                {/* thông báo lỗi khi userName không hợp lệ */}
                {errors.userName && <p className="!mt-1 text-xs text-red-500 pl-5">{`${errors.userName.message}`}</p>}
                <div className="relative text-gray-500">
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    className="peer w-full border-2 border-gray-200 py-2 pr-12 pl-4 bg-transparent outline-none placeholder-slate-400 focus:border-blue-300 h-[40px] rounded-sm"
                    autoComplete="off"
                  />
                  {/* set icon cho sự kiện show và hide password */}
                  {showPassword ? (
                    <button type="button">
                      <AiOutlineEye
                        onClick={handleShowPassword}
                        className="peer-focus:text-blue-400 absolute right-0 top-1/2 translate-y-[-50%] mx-5 text-xl cursor-pointer text-gray-400"
                      />
                    </button>
                  ) : (
                    <button type="button">
                      <AiOutlineEyeInvisible
                        onClick={handleShowPassword}
                        className="peer-focus:text-blue-400 absolute right-0 top-1/2 translate-y-[-50%] mx-5 text-xl cursor-pointer text-gray-400"
                      />
                    </button>
                  )}
                </div>
                {/* thông báo lỗi khi password không hợp lệ */}
                {errors.password && <p className="!mt-1 text-xs text-red-500 pl-5">{`${errors.password.message}`}</p>}
                {/* <div className="text-gray-500 relative w-full  border-2 border-gray-200 items-center rounded-sm hidden sm:flex overflow-hidden">
                  <RiBuilding2Fill className="absolute mx-5 text-gray-400" />
                  <select
                    {...register('saleOrg')}
                    onChange={handleSelectOrg}
                    className="bg-[#1F2D47] text-gray-400 w-full py-2 pl-4 mr-3 focus-visible:outline-none h-[40px]"
                    value={selectSaleOrg}
                  >
                    <option value={''}>
                      -- Công ty --
                    </option>
                    {listOrg.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select>
                </div> */}
                <div className="w-full flex items-center">
                  <input
                    type="checkbox"
                    className={styles.checkBox}
                    id="btnRemember"
                    onChange={() => setIsRemember(!isRemember)}
                    checked={isRemember}
                  />
                  <label htmlFor="btnRemember">
                    <h3 className="text-white text-sm font-medium ml-2 mb-0 cursor-pointer select-none">
                      Remember me
                    </h3>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white font-medium rounded-sm text-sm px-5 py-2.5 mt-[30px] text-center focus:outline-none h-[40px] ${loading ? '!bg-[#E3EDF6]' : '!bg-[#E3EDF6] hover:bg-[#E3EDF6]/75'
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <TbLoaderQuarter className="animate-spin bg mr-2" />
                      Đăng nhập...
                    </span>
                  ) : (
                    <span className='text-[#354A5F] font-bold'>Đăng nhập</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  });
}
