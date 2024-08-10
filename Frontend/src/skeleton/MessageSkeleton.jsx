const MessageSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div
            className="skeleton w-12 h-12 rounded-full"
            style={{ filter: "blur(4px)" }}
          ></div>
          <div className="flex flex-col gap-2">
            <div
              className="skeleton h-8 w-48 rounded-lg"
              style={{ filter: "blur(4px)" }}
            ></div>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <div className="flex flex-col gap-2">
            <div
              className="skeleton h-8 w-32 rounded-lg"
              style={{ filter: "blur(4px)" }}
            ></div>
          </div>
          <div
            className="skeleton w-12 h-12 rounded-full"
            style={{ filter: "blur(4px)" }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default MessageSkeleton;
