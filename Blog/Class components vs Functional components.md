# Class components vs Functional components

## Class components

```javascript
class Dashboard extends Component {
  render() {
    return (
      <DashboardStyled>
        <h2>Please select card type:</h2>

        <div className="dashboard__pack">
          <Pack
            title="Goblins"
            cover={goblinCover}
            imgAlt="Select goblin pack"
            onClick={() => {}}
          />
          <Pack
            title="Dinosaurs"
            cover={dinosaurCover}
            imgAlt="Select dinosaur pack"
            onClick={() => {}}
          />
        </div>
      </DashboardStyled>
    );
  }
}
```

## Functional components

```javascript
const FIRST_PACK = 'goblins';

const Dashboard = () => {
  const [pack, setPack] = useState(FIRST_PACK);

  return (
    <DashboardStyled>
      <h2>Please select card type:</h2>

      <div className="dashboard__pack">
        <Pack
          title={FIRST_PACK}
          cover={goblinCover}
          imgAlt="Select goblin pack"
          onClick={() => {}}
        />
        <Pack
          title="Dinosaurs"
          cover={dinosaurCover}
          imgAlt="Select dinosaur pack"
          onClick={() => {}}
        />
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
```
