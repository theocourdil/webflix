import { useState } from "react";
import Input from "./composants/Input";
import VerticalList from "./composants/VerticalList";

import data from "./data.json";
import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);
  const movies = data.movies.filter((movie) =>
    movie.title.match(new RegExp(value, "i"))
  );
  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      <VerticalList className={classes.list} data={movies} />
    </div>
  );
}

export default Home;