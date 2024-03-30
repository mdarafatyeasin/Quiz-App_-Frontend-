import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id"); // Corrected access to local storage
    const token = localStorage.getItem("token"); // Corrected access to local storage

    if (id && token) {
      fetch(`http://127.0.0.1:8000/hook/is_verified/${id}/${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
      
    }
  }, []); // Empty dependency array to run effect only once

  // Return user and loading states
  return { user, loading };
};

export default useUser;
