import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import PropTypes from "prop-types"

const AboutMe = () => {
  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center space-x-4 px-20">
      <section className="w-1/2 h-full">
        <img
          src="https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_1280.jpg"
          alt="book-image"
          className="object-cover w-full h-full rounded-md"
        />
      </section>
      <section className="w-1/2 h-full">
        <h1 className="text-xl font-semibold">Samuel Tale</h1>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          obcaecati neque incidunt tempora ab enim voluptates id qui minima
          animi.
        </p>

        <div className="flex space-x-3 mt-7">
          <Icon
            icon={<FaGithub className="text-lg" size={20} />}
            link="https://github.com/sami855-ux"
          />
          <Icon
            icon={<FaLinkedin className="text-lg" size={20} />}
            link="https://www.linkedin.com/in/sami-tale-49aa79237/"
          />
          <Icon
            icon={<FaTelegram className="text-lg" size={20} />}
            link="https://t.me/Sami_hhtt"
          />
        </div>
      </section>
    </div>
  )
}

const Icon = ({ icon, link }) => {
  return (
    <a href={link} className="cursor-pointer " target="_blank">
      {icon}
    </a>
  )
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
}
export default AboutMe
