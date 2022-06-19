
import React,{FC} from 'react'

const About: FC = () => {
  return (
      <>
        <section className="about" id="about">

        <h1 className="heading">Обо мне</h1>

        <div className="row">

        <div className="content">
            <h3>Более 4 лет опыта, более 50 завершенных проектов</h3>
            <p>Краткие факты обо мне: Опыт в коммерческой разработке более 4 лет,За все время прособеседовал более 50 человек на разные позиции, Стрессоустойчив и усидчив, Отлично развитые софт скилы</p>
            <a href="#services" className="btn">Подробнее</a>
        </div>
        <div className="video">
        </div>

        </div>

        <div className="box-container">

        <div className="box">
            <h3>4+</h3>
            <p>Года опыта</p>
        </div>

        <div className="box">
            <h3>50+</h3>
            <p>Завершенных проектов</p>
        </div>

        <div className="box">
            <h3>10+</h3>
            <p>Различных направлений</p>
        </div>

        <div className="box">
            <h3>50+</h3>
            <p>Проведенных собеседований</p>
        </div>

        </div>

        </section>
      </>
  )
}

export default About
