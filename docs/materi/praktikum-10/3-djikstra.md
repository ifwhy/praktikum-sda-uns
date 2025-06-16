---
sidebar_position: 3
---

# 📌 Shortest Path: Mencari Rute Terpendek

📚 Struktur Data: Graf
🧠 Algoritma: Dijkstra's Algorithm

✨ Konsep Singkat
Shortest Path adalah permasalahan dalam graf yang mencoba menemukan jalur dengan total bobot terkecil (atau jarak terpendek) antara dua simpul (node).

🧭 Tujuan: Temukan rute tercepat dari satu titik ke titik lainnya.

🖼️ Contoh Visual

Pada contoh di atas, kita mencari jalur terpendek dari Node 1 ke Node 9.
Hasil: 1 → 2 → 3 → 8 → 9
🔢 Total Bobot: 6 (lebih kecil dibanding opsi lain seperti bobot 7 atau 10)

🧩 Contoh Kasus Nyata:
🔍 Mencari rute tercepat dari rumah ke sekolah menggunakan jalanan dengan panjang berbeda.

⚙️ Cara Kerja Dijkstra
Langkah-langkah utama dari algoritma Dijkstra:

🚦 Tandai semua node dengan jarak ∞ (tak hingga), kecuali node asal yang ditandai dengan 0.

🗺️ Simpan semua node dalam dua kategori:

Visited ✅

Unvisited ❌

📍 Simpan rute tercepat yang ditemukan sejauh ini menggunakan struktur map (jarak dan parent).

🔁 Selama masih ada node yang belum dikunjungi:

Pilih node dengan jarak terkecil.

Perbarui jarak tetangga jika ditemukan rute yang lebih pendek.

Tandai node sebagai sudah dikunjungi.

Simpan informasi "dari mana datangnya" (parent node).

📌 Referensi visual:
Lihat di GeeksforGeeks

💻 Contoh Implementasi Dijkstra (Java)

```java
Copy
Edit
import java.util.\*;

public class DijkstraExample {
static class Edge {
int target, weight;
Edge(int target, int weight) {
this.target = target;
this.weight = weight;
}
}

    static class Graph {
        int vertices;
        List<List<Edge>> adjList;

        Graph(int vertices) {
            this.vertices = vertices;
            adjList = new ArrayList<>();
            for (int i = 0; i < vertices; i++) {
                adjList.add(new ArrayList<>());
            }
        }

        void addEdge(int u, int v, int weight) {
            adjList.get(u).add(new Edge(v, weight));
            adjList.get(v).add(new Edge(u, weight)); // Jika undirected
        }

        void dijkstra(int start) {
            int[] dist = new int[vertices];
            boolean[] visited = new boolean[vertices];
            int[] parent = new int[vertices];
            Arrays.fill(dist, Integer.MAX_VALUE);
            Arrays.fill(parent, -1);
            dist[start] = 0;

            PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
            pq.offer(new int[]{start, 0});

            while (!pq.isEmpty()) {
                int[] current = pq.poll();
                int u = current[0];

                if (visited[u]) continue;
                visited[u] = true;

                for (Edge edge : adjList.get(u)) {
                    int v = edge.target;
                    int weight = edge.weight;

                    if (!visited[v] && dist[u] + weight < dist[v]) {
                        dist[v] = dist[u] + weight;
                        parent[v] = u;
                        pq.offer(new int[]{v, dist[v]});
                    }
                }
            }

            // Cetak hasil
            System.out.println("Vertex\tDistance from Source\tPath");
            for (int i = 0; i < vertices; i++) {
                System.out.print(i + "\t\t" + dist[i] + "\t\t");
                printPath(parent, i);
                System.out.println();
            }
        }

        void printPath(int[] parent, int j) {
            if (j == -1) return;
            printPath(parent, parent[j]);
            System.out.print(j + " ");
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(10);
        g.addEdge(1, 2, 1);
        g.addEdge(2, 3, 1);
        g.addEdge(3, 8, 2);
        g.addEdge(8, 9, 2);
        g.addEdge(1, 4, 2);
        g.addEdge(4, 5, 5);
        g.addEdge(5, 9, 3);
        g.addEdge(1, 6, 4);
        g.addEdge(6, 7, 6);
        g.addEdge(7, 9, 1);

        g.dijkstra(1);
    }

}

```

```

```
