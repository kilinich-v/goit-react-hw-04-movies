const PageButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} type="submit" className="button">
        Show more
      </button>
    </div>
  );
};

export default PageButton;
