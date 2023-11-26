import Image from "next/image";
import { useSelector } from "react-redux";
export default function UserAvatarAndName() {
  const { data } = useSelector((state) => state.user);
  return (
    <figure className="flex items-center justify-start gap-x-[6px]">
      <Image src="/dummy-avatar.png" width={37} height={47} alt="" />
      <figcaption className="font-bold text-[0.875rem] text-primary-medium font-pjs leading-[100%] capitalize">
        {data?.firstName} {data?.lastName}
      </figcaption>
    </figure>
  );
}
