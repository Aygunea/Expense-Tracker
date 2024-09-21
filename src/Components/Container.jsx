
const Container = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r bg-pink from-pink to-lightblue">
      {children}
    </div>
  );
};

export default Container;