import styles from "./index.module.scss";
import assembly from "../../assets/assembly.jpeg";
import founder from "../../assets/founder.jpeg";
import principal from "../../assets/principal.jpeg";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <img src={assembly} alt="Assembly" />
      </div>
      <div className={styles.motto}>
        <p>
          Get your children the best quality education in a modern environment
        </p>
      </div>

      <section className={styles.messageFrom}>
        <div className={styles.photoWrapper}>
          <img src={founder} alt="Founder" />
        </div>
        <div className={styles.textContent}>
          <h3>Founder's Message</h3>
          <p>
            We had established the school in 2009 with the single aim of
            providing the best quality education to the children of Gosainganj
            area.
          </p>
          <p>Over the years, we have made every effort to fulfill that goal</p>
          <p>
            We strongly believe in the power of education and building
            successful futures for your children.
          </p>
          <p>
            We make sure we get the best teachers to teach in our school and
            provide the best environment for learning.
          </p>
        </div>
      </section>

      <section className={`${styles.messageFrom} ${styles.right}`}>
        <div className={styles.photoWrapper}>
          <img src={principal} alt="Principal" />
        </div>
        <div className={styles.textContent}>
          <h3>Principal's Message</h3>
          <p>
            Our aim is to provide best education to your children in a modern
            environment.
          </p>
          <p>
            In the current world of technology, we make sure your children learn
            through computer-oriented methods of teaching.
          </p>
          <p>
            Along with strong academics and technology-based learning, we also
            focus on providing a great learning environment for your children.
          </p>
          <p>
            Let's provide your children the best education and get them ready to
            build a selfsustaining future for themselves.
          </p>
        </div>
      </section>
    </div>
  );
}
