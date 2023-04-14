// mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl
// Children are the text between the header and footer
import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
export default function SiteHeader() {
  return (
    <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
      <div className="flex gap-12 ">
        <section className="flex items-center gap-6">
          <img src="./VLALogo.jpg" alt="VLA logo" width="75px"></img>

          <div className="text-2xl font-medium">
            <Link href="/">Vietnamese Language Association</Link>
          </div>
        </section>

        <div className="hidden pl-2 xl:flex gap-3 items-center mt-2 md:ml-0 md:mt-0 md:mr-4 text-2xl font-medium">
          <Link href="#">Join</Link>
          <Link href="#">Events</Link>
          <Link href="#">Team</Link>
          <Link href="#">About us</Link>
          <a target="_blank" href="https://discord.gg/Vmbh9U7ZYS">
            <FaDiscord
              style={{
                width: 50,
                height: 50,
                marginLeft: 5,
                marginRight: 5
              }}
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/vlautd/">
            <BsInstagram
              style={{
                width: 40,
                height: 40,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
