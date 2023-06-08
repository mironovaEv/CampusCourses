/* eslint-disable object-curly-newline */
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';

const CourseAnnotations = ({ register, errors, watch, setValue }) => {
  useEffect(() => {
    register('annotations', { required: 'Поле обязательно к заполнению', min: 1 });
  }, [register]);
  const onEditorStateChange = (editorState) => {
    setValue('annotations', editorState);
  };
  const editorContent = watch('annotations');
  return (
    <Form.Group className="mb-3 mt-3" controlId="formCourseAnnotations">
      <Form.Label>Аннотации</Form.Label>
      <ReactQuill theme="snow" name="annotations" value={editorContent} onChange={onEditorStateChange} />
      <div className="mt-1 text-danger">
        {errors?.annotations && <p className="mb-0">{errors?.annotations?.message || 'Ошибка!'}</p>}
      </div>
    </Form.Group>
  );
};

export default CourseAnnotations;
