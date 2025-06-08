import React from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const val = atom({
  key: "counter",
  default: 0,
});

const App = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
};

const Counter = () => {
  return (
    <div>
      <div>
        <Increase />
        <Decrease />
        <Current />
      </div>
    </div>
  );
};

const Increase = () => {
  const setCount = useSetRecoilState(val);
  return (
    <div>
      <button onClick={() => setCount((v) => v + 1)}>Increase</button>
    </div>
  );
};

const Decrease = () => {
  const setCount = useSetRecoilState(val);
  return (
    <div>
      <button onClick={() => setCount((v) => v - 1)}>Decrease</button>
    </div>
  );
};

const Current = () => {
  const count = useRecoilValue(val);
  return <div>{count}</div>;
};

export default App;
