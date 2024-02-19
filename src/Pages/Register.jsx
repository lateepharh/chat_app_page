import React from "react";
import Camera from "../components/utils/camera.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
function Register() {
  const [err, setErr] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
    console.log(e.target[0].value);

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            updateProfile(res.user, {
              userName,
              photoURL: downloadURL,
            });
            setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="wrapper">
        <span className="logo">ChatterBox</span>
        <span className="title">Sign Up</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" id="text" placeholder="UserName" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <img src={Camera} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something Went Wrong!!!</span>}
        </form>
        <p>Already have an account? Log in</p>
      </div>
    </div>
  );
}

export default Register;
