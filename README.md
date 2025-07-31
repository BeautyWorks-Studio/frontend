# Beauty Shop Project

This repository contains the frontend for the Beauty Shop application.

## Getting Started with the Frontend

All the frontend code is located in the `frontend/` directory.

To run the frontend development server, please follow these steps:

1.  **Navigate into the frontend directory:**
    Make sure your terminal is in the correct folder.
    ```sh
    cd frontend
    ```

2.  **Install dependencies:**
    If you haven't done this yet, or if you pulled new changes that might have added new dependencies, run:
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```

This will start the development server, and you should see a URL in your terminal (e.g., `http://localhost:5173`) where you can view the application.

### Troubleshooting

If `npm run dev` still doesn't work after following these steps, please check the following:

*   **Error Messages:** Look for any error messages in the terminal. They often point to the exact problem.
*   **`package.json`:** Make sure the `frontend/package.json` file exists and has a `dev` script inside the `"scripts"` section.
*   **Node Modules:** The `frontend/node_modules` directory might be corrupted. You can try deleting it (`rm -rf node_modules` on Mac/Linux or `rmdir /s /q node_modules` on Windows) and running `npm install` again.