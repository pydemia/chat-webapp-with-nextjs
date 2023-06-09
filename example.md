# Example App

```bash
npx create-next-app openai-chat

npm install @openai/client

```

* `api/createMessage.ts`:

```typescript
import { OpenAI } from "@openai/client";

export const createMessage = async (text: string) => {
  const openAI = new OpenAI("<YOUR_API_KEY>");
  const response = await openAI.create("text-generation", {
    prompt: text,
    max_tokens: 100,
  });
  return response.choices[0].text;
};

```

* `App.tsx`:

```typescript
import React, { useState } from "react";
import { createMessage } from "../api/createMessage";

const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(await createMessage(text));
  };

  return (
    <div>
      <h1>OpenAI Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {response}
      </div>
    </div>
  );
};

export default App;

```

```bash
npm run dev
```
