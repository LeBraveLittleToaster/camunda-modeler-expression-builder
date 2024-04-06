/* eslint-disable no-unused-vars */
import React, { useState } from 'camunda-modeler-plugin-helpers/react';
import { Overlay, Section } from 'camunda-modeler-plugin-helpers/components';
import DnDFlow from './App';
import 'reactflow/dist/style.css';

const OFFSET = { right: 0 };

// we can even use hooks to render into the application
export default function ConfigOverlay({ anchor, initValues, onClose }) {
  const [enabled, setEnabled] = useState(initValues.enabled);
  const [interval, setAutoSaveInterval] = useState(initValues.interval);

  const onSubmit = () => onClose({ enabled, interval });

  // we can use the built-in styles, e.g. by adding "btn btn-primary" class names



  return (
    <Overlay anchor={anchor} onClose={onClose} offset={OFFSET} minWidth={1280} minHeight={600}>
        <DnDFlow />
    </Overlay >
  );
}

