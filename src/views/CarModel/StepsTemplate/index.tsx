import React from 'react';
import { useParams } from 'react-router-dom';
import { STEPS } from "@/utils/enums/STEPS";
import Trims from "../Trims/Trims";
import Colors from "../Colors/Colors";

const configComponent = {
  [STEPS.TRIMS]: Trims,
  [STEPS.COLORS]: Colors,
}

interface RouteParams {
  step: STEPS
}

const Steps = () => {
  const { step } = useParams<RouteParams>();
  const ComponentType = configComponent[step || ''];

  if (!ComponentType) {
    return null;
  }

  const styles = {
    width: '100%',
    height: '100%',
    flex: '1 1',
    overflowY: 'auto'
  } as React.CSSProperties;

  return (
    <div style={styles}>
      <ComponentType />
    </div>
  );
};

export default Steps;
