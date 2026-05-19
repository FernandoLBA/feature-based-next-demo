// Branded Types
type Brand<T, B> = T & { readonly __brand: B };
type UserId = Brand<string, "UserId">;
type TaskId = Brand<string, "TaskId">;

// Utility Types Avanzados
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

type Mutable<T> = { -readonly [P in keyof T]: T[P] };

// Componentes con Children
type WithChildren<T = {}> = T & { children: React.ReactNode };
type WithOptionalChildren<T = {}> = T & { children?: React.ReactNode };

// HTML Elemet Typing
type DivProps = React.ComponentProps<"div">;
type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

// Herencia de tipos (usando intersection + generics)
type BaseEntity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

type TaskStatus = "todo" | "in-progress" | "review" | "done";

type Task = BaseEntity & {
  title: string;
  description: string;
  status: TaskStatus;
  assigneeId: UserId;
  projectId: string;
  priority: "low" | "medium" | "high";
};
