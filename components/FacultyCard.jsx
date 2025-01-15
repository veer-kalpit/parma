import styles from "../styles/Faculty.module.css";

const FacultyCard = ({ icon, title, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.staff}>
        <div>
          <p className={styles.title}>{title}</p>
        </div>

        <div className={styles.dropdownIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
          >
            <path
              d="M1.5 1.25L12 11.75L22.5 1.25"
              stroke="#BE121F"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
