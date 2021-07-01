const Styles = () => {
  const primaryColor = "green";
  return (
    <style global jsx>
      {`
        .text-primary {
          color: ${primaryColor};
        }
        .bg-primary {
          background-color: ${primaryColor};
        }
        .bg-primary-100 {
          background-color: ${primaryColor}10;
        }
        .border-primary {
          border-color: ${primaryColor};
        }
      `}
    </style>
  );
};

export default Styles;
