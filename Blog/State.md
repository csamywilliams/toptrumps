# State

## Class state

```javascript
class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    };

    this.selectPack = this.selectPack.bind(this);
  }

  selectPack() {
    this.setState((state) => ({
      isSelected: !state.isSelected,
    }));
  }

  render() {
    return (
      <PackStyled>
        <h3>{this.props.title}</h3>
        <img
          className="pack__cover"
          src={this.props.cover}
          alt={this.props.imgAlt}
        />
      </PackStyled>
    );
  }
}
```

## State in hooks

```javascript
const Pack = ({ title, cover, imgAlt }) => {
  const [selected, setSelected] = useState(false);

  return (
    <PackStyled onClick={() => setSelected(selected)}>
      <h3>{title}</h3>
      <img className="pack__cover" src={cover} alt={imgAlt} />
    </PackStyled>
  );
};
```
