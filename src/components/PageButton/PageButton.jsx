 const PageButton = ({onClick})=> {
    return (
      <div>
        <button onClick={onClick} type="submit">
          Show more
        </button>
      </div>
    );
}

export default PageButton;