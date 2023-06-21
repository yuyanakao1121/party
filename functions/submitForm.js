exports.handler = async function (event) {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }
  
    try {
      const requestBody = JSON.parse(event.body);
      // データを保存する処理を実装
      // 例: データベースへの保存やファイルへの書き込みなど
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Data saved successfully" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };
  