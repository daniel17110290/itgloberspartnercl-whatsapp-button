import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.css"

type Props = {
  logo: string,
  phone: string,
  message: string,
  width: number,
  height: number
}


const whatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  console.log("mi mensaje formateado es", formattedMessage, logo)
  return <>
    <div className={` fixed bottom-2 right-2 flex flexColumn ${styles.containerWhatsappButton}`}>
      <a href={`https://wa.me/${phone}?text=Me%20interesa%20el%20producto%20que%20vendes`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={logo}
          width={width}
          height={height}
          alt="Logo de WhatsApp"
        />
      </a>
    </div>
  </>
}

whatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

whatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "3206213535",
  message: "estas comunicandote con Diesel store, te interesa algo",
  width: 80,
  height: 80
}

whatsappButton.schema = {
  title: "Boton de WhatsApp",
  type: "object",
  properties: {
    logo: {
      title: "logo de WhatsApp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "telefono",
      description: "Agrega por favor un numero de telefono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor un mensaje que se vera para el cliente",
      type: "string",
      widget: {
        "ui-widget": "textarea"
      }
    },
    width: {
      title: "telefono",
      description: "Agrega por favor un numero de telefono",
      type: "number"
    },
    height: {
      title: "telefono",
      description: "Agrega por favor un numero de telefono",
      type: "number"
    }
  }
}


export default whatsappButton;