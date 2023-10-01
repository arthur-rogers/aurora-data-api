-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users (
   user_id VARCHAR(50) PRIMARY KEY,
   full_name VARCHAR(50) NOT NULL,
   phone_number VARCHAR(15),
   user_email VARCHAR,
   address TEXT
);

-- Insert 20 units of sample data with specified UUIDs
INSERT INTO users (user_id, full_name, phone_number, user_email, address)
VALUES
    ('7b647b12-706e-4b2e-bf91-44ab176bd1c0', 'John Doe', '123-456-7890', 'john@example.com', '123 Main St'),
    ('eb85e87f-8211-47aa-8cf3-44f98f408430', 'Jane Smith', '987-654-3210', 'jane@example.com', '456 Elm St'),
    ('a79c0769-7e10-487c-9d2a-1592a4a33f9d', 'Alice Johnson', '555-123-4567', 'alice@example.com', '789 Oak St'),
    ('cf3c9f3e-7234-4ee5-b70c-7ed31a22c019', 'Bob Brown', '777-888-9999', 'bob@example.com', '101 Pine St'),
    ('e7f51f72-89d2-4e5a-a2ac-6f98ef8f4197', 'Eva Green', '111-222-3333', 'eva@example.com', '222 Willow St'),
    ('f8747e38-ef5d-47b6-9359-ea08b149f2ca', 'Sam Adams', '444-555-6666', 'sam@example.com', '333 Cedar St'),
    ('b4ef6b8b-13e4-424a-bc5a-d9b1a4a0c9c7', 'Olivia White', '999-888-7777', 'olivia@example.com', '444 Birch St'),
    ('81e7c874-6e49-43b8-974d-0d7541a35a63', 'Michael Black', '123-987-6543', 'michael@example.com', '555 Redwood St'),
    ('d3d1c107-5a8e-4d7f-a0ab-17b8c2e06a3e', 'Sophia Gray', '333-333-3333', 'sophia@example.com', '666 Oak St'),
    ('3e63aa4e-e123-4b7d-8560-3b0539a50d0d', 'William Turner', '111-999-8888', 'william@example.com', '777 Cedar St'),
    ('c165aa04-7844-4c7b-93aa-4d5ab6e8dca9', 'Emma Brown', '777-123-4567', 'emma@example.com', '888 Elm St'),
    ('3c980ae3-5bfe-42cf-982d-e77d67dbed45', 'Liam Davis', '222-777-3333', 'liam@example.com', '999 Birch St'),
    ('8f6a14a0-11e9-4f42-b535-89b164d75817', 'Ava Johnson', '555-777-1111', 'ava@example.com', '123 Pine St'),
    ('a8e16ee3-979d-4d7e-aae3-fc4ab21d7e4d', 'Noah Miller', '777-444-2222', 'noah@example.com', '234 Main St'),
    ('d743fb31-5809-43c9-a3e5-e9d3ed9e7d5d', 'Mia Moore', '444-111-5555', 'mia@example.com', '456 Willow St'),
    ('e33a2f2b-bae4-4dbb-89b1-c2a95627143f', 'James Smith', '111-444-7777', 'james@example.com', '789 Redwood St'),
    ('a8beaa47-6b5f-4d0c-9f4d-3d0cfa1647d1', 'Charlotte Wilson', '123-555-4444', 'charlotte@example.com', '234 Cedar St'),
    ('b23d5c69-21ef-491f-8aef-5e0c68a184f7', 'Benjamin Harris', '888-777-6666', 'benjamin@example.com', '567 Oak St'),
    ('0c0286df-d4f9-4a9e-9e6a-cd97a9403181', 'Ava Lewis', '555-555-5555', 'ava@example.com', '789 Pine St'),
    ('7e9460cf-088d-4ec3-a0d3-c42e1cd09188', 'Lucas Lee', '222-444-6666', 'lucas@example.com', '890 Elm St');
