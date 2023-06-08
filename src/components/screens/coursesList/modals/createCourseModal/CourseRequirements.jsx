/* eslint-disable object-curly-newline */
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';

const CourseRequirements = ({ register, errors, watch, setValue }) => {
  useEffect(() => {
    register('requirements', { required: 'Поле обязательно к заполнению' });
  }, [register]);
  const onEditorStateChange = (editorState) => {
    setValue('requirements', editorState);
  };
  const editorContent = watch('requirements');
  return (
    <Form.Group className="mb-3 mt-3" controlId="formCourseRequirements">
      <Form.Label>Требования</Form.Label>
      <ReactQuill theme="snow" name="requirements" value={editorContent} onChange={onEditorStateChange} />
      <div className="mt-1 text-danger">
        {errors?.requirements && <p className="mb-0">{errors?.requirements?.message || 'Ошибка!'}</p>}
      </div>
    </Form.Group>
  );
};

export default CourseRequirements;
