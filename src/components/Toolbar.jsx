import "./Toolbar.css"

const Toolbar = ({
  tags,
  currentTag,
  setCurrentTag,
  sortAsc,
  setSortAsc,
}) => {
  return (
    <div className="toolbar">
      <button
        onClick={() => setCurrentTag("All")}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setCurrentTag(tag)}
        >
          {tag}
        </button>
      ))}

      <button
        onClick={() => setSortAsc(!sortAsc)}
      >
        Sort Price {sortAsc ? "↑" : "↓"}
      </button>
    </div>
  );
};

export default Toolbar;