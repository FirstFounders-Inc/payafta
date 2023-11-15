type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const OtpInput = ({ valueLength }: Props) => {
  return (
    <div>
      <div className="flex w-full max-w-[360px] gap-[10px]">
        {[1, 2, 3, 4].map((digit, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            value={digit}
            className="w-full h-[60px] border-[1px] rounded-[5px] text-center font-bold text-[32px] leading-3"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
