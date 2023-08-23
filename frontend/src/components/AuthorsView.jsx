import Authors from "./Authors";
import { useState, useEffect } from "react";
import axios from "axios";
import { port_no } from "./../port";
import styles from "../style";

const AuthorsView = () => {
  const [all_authors, setAuthors] = useState([]);

  const authorsList = async () => {
    try {
      const { data } = await axios.get(`${port_no}/api/v1/users/readUsers`);
      if (data?.success) {
        setAuthors(data?.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authorsList();
  }, []);
  return (
    <section className="bg-gray-100 pt-8 pb-16 w-full">
      <h1 className={`${styles.heading2} ${styles.paddingX} text-center py-3`}>
        List of Authors
      </h1>
      <div className="w-full flex justify-center">
        <div
          className={`py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
        >
          {all_authors &&
            all_authors.map((a) => (
              <Authors
                key={a._id}
                cardImage={`${port_no}/api/v1/users/readUserPhoto/${a._id}`}
                cardHeading={a.username}
                cardvalue={a.role}
                cardCompany={a.company}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsView;
