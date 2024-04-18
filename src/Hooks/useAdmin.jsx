import { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(null);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");

    if (id) {
      fetch(`https://quiz-app-backend-ybe6.onrender.com/hook/is_admin/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setAdmin(data);
          setAdminLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setAdminLoading(false);
        });
    } else {
      setAdminLoading(false);
    }
  }, []);
  return { admin, adminLoading };
};

export default useAdmin;
