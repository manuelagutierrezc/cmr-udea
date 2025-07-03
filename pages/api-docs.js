// pages/api-docs.js
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return <SwaggerUI url="/api/swagger-spec" />;
}
