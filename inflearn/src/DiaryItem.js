const DiaryItem = ({ author, content, created_data, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자:{author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_data).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
