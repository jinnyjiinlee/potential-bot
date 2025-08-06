import { FormEvent, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

type ModalProps = {
  show: boolean;
  onClose: () => void;
};

type RadioCardProps = {
  icon: string;
  label: string;
  value: string;
  name: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Modal({ show, onClose }: ModalProps) {
  const [userType, setUserType] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // 초기화
    setUserType('');
    setEmail('');
  }, [show]);

  if (!show) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userType || !email) {
      return alert('모든 항목을 입력해주세요.');
    }
    setLoading(true);
    const { error } = await supabase.from('subscribers').insert({ user_type: userType, email });
    setLoading(false);

    if (error) alert('구독 실패: ' + error.message);
    else {
      alert('구독 완료! 🙌');
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-[3px]'>
      <div className='relative bg-white w-[90vw] max-w-[370px] min-h-[200px] rounded-2xl px-6 pb-8 pt-8 shadow-xl flex flex-col items-center'>
        {/* 닫기 버튼 */}
        <button
          type='button'
          className='absolute top-4 right-4 z-10 rounded-full p-1 bg-[#f5f5f7] hover:bg-gray-200 transition'
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          onClick={onClose}
        >
          <svg width='24' height='24' viewBox='0 0 28 28'>
            <circle cx='14' cy='14' r='12' fill='#F5F5F7' stroke='#E0E0E0' />
            <path d='M9 9L19 19M19 9L9 19' stroke='#86868b' strokeWidth='2' strokeLinecap='round' />
          </svg>
        </button>
        <h2 className='text-2xl font-bold mb-2 text-center'>포텐셜봇이 응원할게요!</h2>
        <form className='flex flex-col gap-8 ' onSubmit={handleSubmit}>
          <div>
            <h3 className='font-semibold mb-5 text-center text-lg'>어떤 분이신가요?</h3>
            <div className='grid grid-cols-2 sm:grid-cols-2 gap-4 w-full justify-items-center mb-2'>
              <RadioCard
                icon='🎓'
                label='취업준비생'
                value='취업준비생'
                name='userType'
                required
                checked={userType === '취업준비생'}
                onChange={() => setUserType('취업준비생')}
              />
              <RadioCard
                icon='🚀'
                label='이직준비생'
                value='이직준비생'
                name='userType'
                checked={userType === '이직준비생'}
                onChange={() => setUserType('이직준비생')}
              />
              <RadioCard
                icon='💼'
                label='직장인(사원급)'
                value='직장인(사원급)'
                name='userType'
                checked={userType === '직장인(사원급)'}
                onChange={() => setUserType('직장인(사원급)')}
              />
              <RadioCard
                icon='🌟'
                label='직장인(리더급)'
                value='직장인(리더급)'
                name='userType'
                checked={userType === '직장인(리더급)'}
                onChange={() => setUserType('직장인(리더급)')}
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 items-center w-full'>
            <input
              type='email'
              name='email'
              placeholder='이메일 주소를 입력하세요'
              className='w-full max-w-xs border border-gray-200 rounded-xl px-4 py-3 text-base shadow focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] outline-none transition'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type='submit'
              disabled={loading}
              className='w-full max-w-xs bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition'
            >
              {loading ? '구독 중…' : '구독하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function RadioCard({ icon, label, value, name, required = false, checked = false, onChange }: RadioCardProps) {
  const id = `${name}-${value}`;
  const borderColor = checked ? 'border-[var(--primary-color)]' : 'border-transparent';
  return (
    <label
      htmlFor={id}
      className={`
        flex flex-col items-center justify-center gap-1
        py-4 px-2 w-full max-w-[240px] mx-auto
        rounded-xl cursor-pointer
        border-2 ${borderColor} bg-[#fafafd]
        shadow transition-all duration-200
        hover:bg-[#f4f3ff]

        text-base font-semibold text-[#222]
        outline-none
        focus-within:ring-2 focus-within:ring-[#7f5af0]
      `}
      style={{ minWidth: 0 }}
    >
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        required={required}
        className='hidden peer'
        checked={checked}
        onChange={onChange}
      />
      <span className='text-2xl'>{icon}</span>
      <span>{label}</span>
    </label>
  );
}
