export const downloadFile = (fileUrl: string, token: string, extension: 'pdf' | 'html') => {
  let anchor = document.createElement("a");
  document.body.appendChild(anchor);
  
  let headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  
  fetch(fileUrl, { headers })
      .then(response => response.blob())
      .then(blobby => {
          let objectUrl = window.URL.createObjectURL(blobby);
  
          anchor.href = objectUrl;
          anchor.download = `report.${extension}`;
          anchor.click();
  
          window.URL.revokeObjectURL(objectUrl);
      });
}

