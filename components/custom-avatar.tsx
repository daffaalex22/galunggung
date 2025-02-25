import { forwardRef } from "react";
import { useAvatar } from "@heroui/avatar";
import Image from "next/image";

const CustomAvatar = forwardRef<HTMLDivElement, any>((props, ref) => {
  const { src, alt, getAvatarProps, getImageProps } = useAvatar({
    ref,
    ...props,
  });

  return (
    <div {...getAvatarProps()}>
      {src && (
        <Image
          height={20}
          src={src}
          width={20}
          {...getImageProps()}
          alt={alt}
        />
      )}
    </div>
  );
});

CustomAvatar.displayName = "CustomAvatar";

export default CustomAvatar;
