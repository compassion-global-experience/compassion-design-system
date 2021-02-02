const url = process.env.STORYBOOK_POST_FILE_ENDPOINT;
const headers = new Headers({
  apikey: process.env.STORYBOOK_COT_API_KEY,
  'Content-Type': 'application/json',
});

const getFormData = (fields, photo) => {
  const formData = new FormData();

  Object.keys(fields).forEach((field) => {
    formData.set(field, fields[field]);
  });

  formData.set('file', photo);

  return formData;
};

const uploadFile = async (file) => {
  const fileMetaData = {
    project: 'shared',
    caption: 'Test uploader GDS component',
    mimeType: file.type,
  };

  // Post Metadata
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(fileMetaData),
    headers,
  });
  const data = await response.json();
  const { fields } = data.data;

  // Upload to S3
  const s3url = data.data.url;
  const formData = getFormData(fields, file);
  await fetch(s3url, {
    method: 'POST',
    body: formData,
  });
}

export const uploadFiles = async (fileList) => {
  const filesArray = Array.from(fileList)

  await Promise.all(filesArray.map(async (file) => {
    await uploadFile(file);
  }))
};
