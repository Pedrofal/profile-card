import styles from "./styles.module.css"
export default function Card(porps) {
  return (
    <div className={styles.container}>
      <img src={porps.avatar} alt={porps.name} className={styles.avatar}/>
      <h2>{porps.name}</h2>
      <div>{porps.bio}</div>
      <div>{porps.phone}</div>
      <div>{porps.email}</div>
      <div className={styles.links}>
        <a href={porps.githubUrl} target="_blank">Github</a>
        <a href={porps.linkedinUrl} target="_blank">Linkedin</a>
      </div>
    </div>
  );
}
