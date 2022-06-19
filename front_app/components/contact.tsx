
import React,{ FC } from 'react'
import ContactForm from './contact-form';

const Contact: FC<{ path:string }> = ({ path }) => {
  return (
      <>
        <section className="contact" id="contact">

        <h1 className="heading">Связаться с нами</h1>

        <div className="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155710.78896448578!2d30.81082618574757!3d52.42514055566009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4699b50faf1a5%3A0x5ecca30fd2361396!2z0JPQvtC80LXQu9GM!5e0!3m2!1sru!2sby!4v1655645379402!5m2!1sru!2sby" className="map"   loading="lazy"></iframe>
            <ContactForm path={path} />
        </div>

        </section>
      </>
  )
}

export default Contact

