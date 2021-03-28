import '../../App.css';

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(item => (
        <li className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

// { "id": "id-1", "label": ".docx", "percentage": 22 },
export default Statistics;
