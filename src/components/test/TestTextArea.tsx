'use client';
import React from 'react';
import { TextArea } from '@/components/atoms';
import { TextAreaEventType } from '@/components/atoms/TextArea';

function TestTextArea() {
  const handleTextChange = (e: TextAreaEventType) => console.log(e.target.value);

  return <TextArea rows={5} minRows={5} onChange={handleTextChange} />;
}

export default TestTextArea;
