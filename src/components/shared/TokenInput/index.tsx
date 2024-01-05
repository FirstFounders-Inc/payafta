import { Controller, FieldValues, Path } from 'react-hook-form'
import { IControlledInputProps } from '../Input/interface';
import Input from '../Input';



const TokenInput = <TFieldValue extends FieldValues>(
  props: IControlledInputProps<TFieldValue>,
) => {
    const { name, control, onKeyDown, ...rest } = props;
  return (
    <div className="flex w-full max-w-[360px] gap-[10px]">
      {Array.from({ length: 4 }).map((_digit, idx) => (
        <Controller
          key={idx}
          control={control}
          name={`${name}.${idx}` as Path<TFieldValue>}
          render={({ field, fieldState }) => (
            <Input
              {...rest}
              {...field}
              error={(fieldState.error?.message || '').length > 0}
              helperText={fieldState.error?.message}
              onKeyDown={onKeyDown}
              className='className="w-full h-[40px] border-[1px] rounded-[5px] text-center font-bold text-[32px] leading-3"'
              // ref={ref => {
              //   field.ref(ref);

              // }}
            />
          )}
        />
      ))}
    </div>
  );
};

export default TokenInput