import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
};

function Button({ title, variant = 'solid', ...rest }: ButtonProps) {
  const isOutline = variant === 'outline';
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={isOutline ? 'transparent' : 'green.700'}
      borderWidth={isOutline ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: isOutline ? 'gray.500' : 'green.500',
      }}
      {...rest}
    >
      <Text
        color={isOutline ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}

export default Button;
