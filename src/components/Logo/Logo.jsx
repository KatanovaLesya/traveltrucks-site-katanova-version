import styles from "./Logo.module.css";

const Logo = () => {
  const icons = [
    { name: "Vector", class: styles.iconT },
    { name: "Vector2", class: styles.iconR },
    { name: "Vector3", class: styles.iconA },
    { name: "Vector4", class: styles.iconV },
    { name: "Vector5", class: styles.iconE },
    { name: "Vector6", class: styles.iconL },
    { name: "Vector7", class: styles.iconT2 },
    { name: "Vector8", class: styles.iconR2 },
    { name: "Vector9", class: styles.iconU },
    { name: "Vector10", class: styles.iconC },
    { name: "Vector11", class: styles.iconK },
    { name: "Vector12", class: styles.iconS },
  ];

  return (
    <div className={styles.logo}>
      {icons.map((icon, index) => (
        <svg key={index} className={icon.class}>
          <use xlinkHref={`/public/assets/svg/icons.svg#${icon.name}`}></use>
        </svg>
      ))}
    </div>
  );
};

export default Logo;
