import React from "react";

interface User {
  nome: string;
  ra: string;
}

interface Room {
  id: string;
  name: string;
  players: any[];
}

interface AdminRoomManagerProps {
  currentUser: User;
  rooms: Room[];
  deleteRoom: (roomId: string) => void;
}

const AdminRoomManager: React.FC<AdminRoomManagerProps> = ({ currentUser, rooms, deleteRoom }) => {
  const isDev = currentUser.nome === "teste" && currentUser.ra === "0000";

  return (
    <div>
      {isDev ? (
        <section className="admin-all-rooms mt-8">
          <h2 className="text-lg font-bold mb-2">Excluir Qualquer Sala</h2>
          {rooms.length === 0 ? (
            <p className="text-gray-500">Nenhuma sala encontrada.</p>
          ) : (
            <ul>
              {rooms.map(room => (
                <li key={room.id} className="flex items-center justify-between mb-2">
                  <span>{room.name} (ID: {room.id})</span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteRoom(room.id)}
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <section className="user-rooms mt-8">
          <h2 className="text-lg font-bold mb-2">Salas Atuais</h2>
          {rooms.length === 0 ? (
            <p className="text-gray-500">Nenhuma sala encontrada.</p>
          ) : (
            <ul>
              {rooms.map(room => (
                <li key={room.id} className="mb-2">
                  <span>{room.name} (ID: {room.id})</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
};

export default AdminRoomManager;