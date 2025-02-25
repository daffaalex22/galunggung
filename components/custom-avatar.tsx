import { forwardRef } from "react";
import { useAvatar } from "@heroui/avatar";
import Image from "next/image";

const CustomAvatar = forwardRef<HTMLDivElement, any>((props, ref) => {
  const { src, alt, getAvatarProps } = useAvatar({
    ref,
    ...props,
  });

  return (
    <div {...getAvatarProps()}>
      {src && <Image alt={alt} height={50} src={src} width={50} />}
    </div>
  );
});

CustomAvatar.displayName = "CustomAvatar";

export default CustomAvatar;
