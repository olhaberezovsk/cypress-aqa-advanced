FROM cypress/included:latest
WORKDIR /e2e
COPY . .
RUN npm install
CMD ["npx", "cypress", "run", "--browser", "chrome"]