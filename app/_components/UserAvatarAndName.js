import Image from "next/image"
export default function UserAvatarAndName() {
  return (
    <figure className="flex items-center justify-start gap-x-[6px]">
      <Image src="/avatar.png" width={37} height={47} alt="" />
      <figcaption className="font-bold text-[0.875rem] text-primary-medium font-pjs leading-[100%]">
        Adela Parksoon
      </figcaption>
    </figure>
  )
}
