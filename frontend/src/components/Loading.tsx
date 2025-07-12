import { Skeleton } from "./ui/skeleton";

export const HomeLoading = () => {
  return (
    <div>
      {/* mobile loading */}
      <div className="flex md:hidden flex-col justify-start">
        <div className="flex items-center gap-4 m-4 p-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex items-center gap-3 mx-3">
          <Skeleton className="w-28 h-8 rounded-full" />
          <Skeleton className="w-28 h-8 rounded-full" />
        </div>
        <div className="my-6 mx-3">
          <Skeleton className="w-58 h-6 rounded-full" />
        </div>
        <div className="flex overflow-auto gap-3">
          <div className="flex flex-col items-start">
            <Skeleton className="w-32 h-32 my-2 mx-2" />
            <Skeleton className="w-20 h-5 mx-2 my-1" />
            <Skeleton className="w-28 h-5 mx-2" />
          </div>
          <div className="flex flex-col items-start">
            <Skeleton className="w-32 h-32 my-2 mx-2" />
            <Skeleton className="w-20 h-5 mx-2 my-1" />
            <Skeleton className="w-28 h-5 mx-2" />
          </div>
          <div className="flex flex-col items-start">
            <Skeleton className="w-32 h-32 my-2 mx-2" />
            <Skeleton className="w-20 h-5 mx-2 my-1" />
            <Skeleton className="w-28 h-5 mx-2" />
          </div>
        </div>
        <div className="my-6 mx-3">
          <Skeleton className="w-58 h-6 rounded-full" />
        </div>
        <div className="flex overflow-auto gap-3">
          <div className="flex flex-col items-start">
            <Skeleton className="w-32 h-32 my-2 mx-2" />
            <Skeleton className="w-20 h-5 mx-2 my-1" />
            <Skeleton className="w-28 h-5 mx-2" />
          </div>
          <div className="flex flex-col items-start">
            <Skeleton className="w-32 h-32 my-2 mx-2" />
            <Skeleton className="w-20 h-5 mx-2 my-1" />
            <Skeleton className="w-28 h-5 mx-2" />
          </div>
          <div className="flex flex-col items-start">
            <Skeleton className="w-32 h-32 my-2 mx-2" />
            <Skeleton className="w-20 h-5 mx-2 my-1" />
            <Skeleton className="w-28 h-5 mx-2" />
          </div>
        </div>
      </div>
      {/* desktop loading */}
      <div className="w-full h-screen md:flex hidden gap-4">
        <div className="w-[25%] h-screen flex flex-col items-start px-10 py-5 gap-3 ">
          <div className="flex gap-3 items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
          <div className="flex gap-3 items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          <div className="py-10">
            <div className="flex justify-between gap-5">
              <div className="flex gap-3 items-center">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-5 w-24 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>

          <div>
            <Skeleton className="h-8 w-40 rounded-full" />
          </div>
          <div className="flex flex-col gap-5">
            <Skeleton className="h-8 w-54 rounded-full" />
            <Skeleton className="h-8 w-54 rounded-full" />
            <Skeleton className="h-8 w-54 rounded-full" />
          </div>
        </div>

        <div className="w-[75%] h-screen">
          <div className="hidden md:flex flex-col justify-start">
            <div className="flex justify-between">
              <div className="flex items-center gap-4 m-4 p-2">
                <Skeleton className="w-8 h-8 rounded-full" />
                <Skeleton className="w-8 h-8 rounded-full" />
              </div>
              <div className="flex gap-3 items-center">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3 mx-3">
              <Skeleton className="w-28 h-8 rounded-full" />
              <Skeleton className="w-28 h-8 rounded-full" />
            </div>
            <div className="my-6 mx-3">
              <Skeleton className="w-58 h-6 rounded-full" />
            </div>
            <div className="flex overflow-auto gap-3">
              <div className="flex flex-col items-start">
                <Skeleton className="w-32 h-32 my-2 mx-2" />
                <Skeleton className="w-20 h-5 mx-2 my-1" />
                <Skeleton className="w-28 h-5 mx-2" />
              </div>
              <div className="flex flex-col items-start">
                <Skeleton className="w-32 h-32 my-2 mx-2" />
                <Skeleton className="w-20 h-5 mx-2 my-1" />
                <Skeleton className="w-28 h-5 mx-2" />
              </div>
              <div className="flex flex-col items-start">
                <Skeleton className="w-32 h-32 my-2 mx-2" />
                <Skeleton className="w-20 h-5 mx-2 my-1" />
                <Skeleton className="w-28 h-5 mx-2" />
              </div>
            </div>
            <div className="my-6 mx-3">
              <Skeleton className="w-58 h-6 rounded-full" />
            </div>
            <div className="flex overflow-auto gap-3">
              <div className="flex flex-col items-start">
                <Skeleton className="w-32 h-32 my-2 mx-2" />
                <Skeleton className="w-20 h-5 mx-2 my-1" />
                <Skeleton className="w-28 h-5 mx-2" />
              </div>
              <div className="flex flex-col items-start">
                <Skeleton className="w-32 h-32 my-2 mx-2" />
                <Skeleton className="w-20 h-5 mx-2 my-1" />
                <Skeleton className="w-28 h-5 mx-2" />
              </div>
              <div className="flex flex-col items-start">
                <Skeleton className="w-32 h-32 my-2 mx-2" />
                <Skeleton className="w-20 h-5 mx-2 my-1" />
                <Skeleton className="w-28 h-5 mx-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthLoading = () => {
  return (
    <div className="flex flex-col gap-7 items-center justify-center h-screen">
      <Skeleton className="w-64 h-12 rounded-full " />
      <div className="flex items-center justify-center flex-col gap-10">
        <Skeleton className="w-72 h-10 rounded-md" />
        <Skeleton className="w-72 h-10 rounded-md" />
      </div>
      <Skeleton className="w-44 h-9 rounded-full" />
    </div>
  );
};
