import Quote from "../components/Quote";
import SigninForm from "../components/SigninForm";

const SigninPage = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="h-full flex items-center justify-center">
        <SigninForm />
      </div>
      <div className="hidden lg:block h-full">
        <Quote
          quote="Strive not to be a success, but rather to be of value."
          author="Albert Einstein"
          designation="Theoretical Physicist"
        />
      </div>
    </div>
  );
};

export default SigninPage;
