import { Dialog, Transition } from "@headlessui/react";
import * as React from "react";
import { Modal } from "@/models/modal";
import * as Icon from "@heroicons/react/24/outline";
import api from "@/tools/api";
import { toast } from "react-toastify";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { ThreeDots } from "react-loader-spinner";

const AddCategoryModal: React.FC<Modal> = ({ isOpen, setIsOpen }) => {
  const [loading, setLoading] = React.useState(false);

  const [category, setCategory] = React.useState("");

  const addCategory = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    api
      .post(
        "/categoria/create",
        { descricao: category },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        toast.success("Categoria adicionada com sucesso!");
        closeModal();
      })
      .catch((err: any) => {
        toast.error(err?.response?.data)
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  function closeModal() {
    setCategory("");
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" onClose={closeModal} className="relative z-10">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <form className="fixed inset-0 overflow-y-auto" onSubmit={(e) => addCategory(e)}>
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-auto transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all flex flex-col justify-center gap-6">
                <Dialog.Title className="text-xl font-bold text-c5">Adicionar Nova Categoria</Dialog.Title>
                <Icon.XMarkIcon className="w-6 h-6 absolute top-4 right-4 cursor-pointer" onClick={closeModal} />
                <Dialog.Description className="w-full">
                  <div className="w-full h-10 flex justify-evenly items-center">
                    <Input
                      label="Categoria"
                      name="category"
                      type="text"
                      value={category}
                      onChange={handleInputChange}
                    />
                  </div>
                </Dialog.Description>
                <Dialog.Description className="w-full">
                  {loading ? (
                    <div className="flex justify-center">
                      <ThreeDots color="#1D539F" height={40} width={40} />
                    </div>
                  ) : (
                    <Button type="submit" label="Adicionar" />
                  )}
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </form>
      </Dialog>
    </Transition>
  );
};

export default AddCategoryModal;
